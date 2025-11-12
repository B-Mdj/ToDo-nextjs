"use client";
import { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function TodoPage() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [input, setInput] = useState("");
  const addTask = () => {
    if (!input.trim()) return;
    const newTask = { id: Date.now(), text: input.trim(), completed: false };
    setTasks([newTask, ...tasks]);
    setInput("");
  };
  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };
  const clearCompleted = () => {
    setTasks(tasks.filter((t) => !t.completed));
  };
  const completedCount = tasks.filter((t) => t.completed).length;
  const getFilteredTasks = (filter) => {
    if (filter === "active") return tasks.filter((t) => !t.completed);
    if (filter === "completed") return tasks.filter((t) => t.completed);
    return tasks;
  };

  return (
    <div className="flex py-15 justify-center h-screen bg-gray-50">
      <Card className="w-[380px] h-fit shadow-md">
        <CardHeader>
          <CardTitle className="text-center text-xl font-semibold">
            To-Do List
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2 mb-5">
            <Input
              placeholder="Add a new task..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addTask()}
            />
            <Button
              onClick={addTask}
              className="bg-blue-500 hover:bg-blue-600 text-white transition-colors"
            >
              Add
            </Button>
          </div>
          <Tabs value={filter} onValueChange={setFilter} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <TaskList
                tasks={getFilteredTasks("all")}
                toggleTask={toggleTask}
                deleteTask={deleteTask}
              />
            </TabsContent>
            <TabsContent value="active">
              <TaskList
                tasks={getFilteredTasks("active")}
                toggleTask={toggleTask}
                deleteTask={deleteTask}
              />
            </TabsContent>
            <TabsContent value="completed">
              <TaskList
                tasks={getFilteredTasks("completed")}
                toggleTask={toggleTask}
                deleteTask={deleteTask}
              />
            </TabsContent>
          </Tabs>
          {tasks.length > 0 && (
            <>
              <Separator className="my-3" />
              <div className="flex items-center justify-between text-sm text-gray-600">
                <p>
                  {completedCount} of {tasks.length} completed
                </p>
                <div className="flex gap-2">
                  <Button
                    onClick={clearCompleted}
                    className="bg-white hover:bg-white text-red-500 text-xs px-3 py-1"
                  >
                    Clear Completed
                  </Button>
                </div>
              </div>
            </>
          )}
          <p className="text-xs text-center text-gray-500 mt-6">
            Powered by{" "}
            <a href="https://pinecone.mn" className="text-blue-500">
              Pinecone Academy
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

function TaskList({ tasks, toggleTask, deleteTask }) {
  if (tasks.length === 0)
    return (
      <p className="text-center text-gray-500 text-sm py-4">
        No tasks yet. Add one above!
      </p>
    );
  return (
    <ul className="space-y-2 mt-3">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex items-center justify-between p-2 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"
        >
          <div className="flex items-center gap-2">
            <Checkbox
              checked={task.completed}
              onCheckedChange={() => toggleTask(task.id)}
            />
            <span
              className={`text-sm ${
                task.completed ? "line-through text-gray-400" : ""
              }`}
            >
              {task.text}
            </span>
          </div>
          <Button
            onClick={() => deleteTask(task.id)}
            className="bg-red-50 hover:bg-red-100 text-red-500 w-[67px] h-[30px]"
            size="icon"
          >
            <span className="material-icons text-sm">delete</span>
          </Button>
        </li>
      ))}
    </ul>
  );
}
