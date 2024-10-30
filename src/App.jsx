import React, { useState } from "react";
import data from "./data.json";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "./components/ui/switch";
import { Label } from "./components/ui/label";
import { Button } from "./components/ui/button";

const Demo = () => {
  const [mode, setMode] = useState("dark");

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  return (
    <div
      className={`${
        mode === "dark"
          ? "bg-gradient-to-b from-gray-900 to-black"
          : "bg-gradient-to-b from-gray-100 to-white"
      } h-screen overflow-y-auto relative transition duration-500`}
    >
      <h1
        className={`text-center mt-5 text-3xl font-extrabold ${
          mode === "dark" ? "text-white" : "text-black"
        }`}
      >
        Recipe Menu
      </h1>
      <div className="flex items-center gap-2 justify-end mr-10">
        <Switch
          id="mode"
          checked={mode === "dark"}
          onCheckedChange={toggleMode}
        />
        <Label
          htmlFor="mode"
          className={mode === "dark" ? "text-white" : "text-black"}
        >
          {mode === "dark" ? "Dark" : "Light"} Mode
        </Label>
      </div>
      <div className="flex w-11/12 mx-auto flex-wrap gap-3 justify-center items-center py-8">
        {data.map((item, index) => (
          <Card
            key={index}
            className={`w-[450px] flex flex-col shadow-2xl transform transition duration-300 hover:scale-95 ${
              mode === "dark"
                ? "bg-gradient-to-r from-blue-900 via-teal-900 to-green-900 shadow-cyan-500/50"
                : "bg-gradient-to-r from-blue-100 via-teal-200 to-green-100 shadow-gray-500/50"
            }`}
          >
            <CardHeader>
              <CardTitle
                className={`${
                  mode === "dark" ? "text-white" : "text-black"
                } text-xl text-center`}
              >
                {item.data.strMeal}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <img
                className="rounded-3xl"
                src={item.data.strMealThumb}
                alt={item.data.strMeal}
              />
            </CardContent>
            <CardDescription className="mx-auto mb-2">
              <Button variant="destructive">
                <a
                  href={item.data.strSource}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Recipe
                </a>
              </Button>
            </CardDescription>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Demo;
