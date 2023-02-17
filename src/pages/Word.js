import React, { useState, useEffect } from "react";
import { WordPuzzleComponent } from "../components/WordPuzzleComponent";

export const Word = () => {
  const answerWords = [
    "gurkan",
    "example",
    "project",
    "github",
    "npm",
    "b2t",
    "r2l",
    "star",
    "react",
  ];

  const matrix = [
    ["p", "g", "i", "t", "h", "u", "b"],
    ["p", "g", "i", "t", "h", "u", "b"],
    ["p", "g", "i", "t", "h", "u", "b"],
    ["p", "g", "i", "t", "h", "u", "b"],
    ["p", "g", "i", "t", "h", "u", "b"],
  ];
  const [found, setFound] = useState([]);
  const [isSelecting, setIsSelecting] = useState(false);
  const [selectedLetters, setSelectedLetters] = useState([]);
  const [markedLetters, setMarkedLetters] = useState([]);

  const pathNames = ["left2right", "right2left", "top2bottom", "bottom2top"];
  const [paths, setPaths] = useState(["left2right", "top2bottom"]);

  useEffect(() => {
    if (isSelecting) {
      console.log("selected");
    } else {
      console.log("released");
      const selectedWord = selectedLetters.map((x) => x.letter).join("");
      console.log(selectedWord);
      addToFound(selectedWord);
    }
  }, [isSelecting]);

  const isInList = (searched, arr) => {
    let found = false;

    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (searched === element) {
        found = true;
        break;
      }
    }

    return found;
  };

  const addToFound = (founded) => {
    if (isInList(founded, answerWords)) {
      if (!isInList(founded, found)) {
        setFound([...found, founded]);
        console.log(founded);
      }
    }
  };

  const addOrRemovePath = (param) => {
    // console.log(param);
    if (!isInList(param, paths)) {
      setPaths([...paths, param]);
    } else {
      setPaths(paths.filter((element) => element !== param));
    }
  };

  useEffect(() => {
    console.log("available paths:", paths);
  }, [paths]);

  useEffect(() => {
    console.log("marked letters:", markedLetters);
  }, [markedLetters]);

  return (
    <div>
      <WordPuzzleComponent
        design={{
          markedBackgroundColor: "#00C3FF",
          selectedBackgroundColor: "white",
          hoveredBackgroundColor: "rgb(0, 218, 145)",
          backgroundColor: "rgb(1, 146, 98)",
          fontFamily: "monospace",
          fontWeight: "",
          fontSize: "1.5rem",
          markedForeColor: "white",
          selectedForeColor: "rgb(1, 146, 98)",
          hoveredForeColor: "white",
          foreColor: "white",
        }}
        options={{
          answerWords: answerWords,
          matrix: matrix,
          isSelecting: isSelecting,
          selectedLetters: selectedLetters,
          setSelectedLetters: setSelectedLetters,
          markedLetters: markedLetters,
          setMarkedLetters: setMarkedLetters,
          setIsSelecting: setIsSelecting,
          availablePaths: paths,
          /*[
            // "right2left",
            "left2right",
            "top2bottom",
            //"bottom2top",
          ],*/
        }}
      />
    </div>
  );
};

export default Word;