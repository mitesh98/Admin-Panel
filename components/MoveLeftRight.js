import { useEffect, useState } from "react";
import { mockApi1 } from "../Utils/MockData";
export default function MoveLeftRight() {
  const [listOfStudents, setListOfStudents] = useState([]);
  const [listOfBox1Students, setListOfBox1Students] = useState([]);
  const [listOfBox2Students, setListOfBox2Students] = useState([]);
  useEffect(() => {
    console.log("mockApi1()", mockApi1());
    mockApi1().then((res) => {
      setListOfStudents(res);
    });
  }, []);
  useEffect(() => {
    setListOfBox1Students(listOfStudents);
  }, [listOfStudents]);

  let readyToMoveItemFromBox1 = [];
  let readyToMoveItemFromBox2 = [];
  const editReadyToMoveItem = (check, student) => {
    if (!check) {
      readyToMoveItemFromBox1 = readyToMoveItemFromBox1.filter(
        (item) => item.id != student.id
      );
    } else {
      readyToMoveItemFromBox1.push(student);
    }
  };
  const editReadyToMoveItemFromBox2 = (check, student) => {
    if (!check) {
      readyToMoveItemFromBox2 = readyToMoveItemFromBox2.filter(
        (item) => item.id != student.id
      );
    } else {
      readyToMoveItemFromBox2.push(student);
    }
  };
  const moveItemFromBox1 = () => {
    const studentIdSet = new Set();
    readyToMoveItemFromBox1.forEach((item) => {
      studentIdSet.add(item.id);
    });
    const newListOfBox1Students = listOfBox1Students.filter((student) => {
      return !studentIdSet.has(student.id);
    });
    setListOfBox1Students(newListOfBox1Students);
    setListOfBox2Students([...listOfBox2Students, ...readyToMoveItemFromBox1]);
    readyToMoveItemFromBox1 = [];
  };
  const moveItemFromBox2 = () => {
    const studentIdSet = new Set();
    readyToMoveItemFromBox2.forEach((item) => {
      studentIdSet.add(item.id);
    });
    const newListOfBox2Students = listOfBox2Students.filter((student) => {
      return !studentIdSet.has(student.id);
    });
    setListOfBox2Students(newListOfBox2Students);
    setListOfBox1Students([...listOfBox1Students, ...readyToMoveItemFromBox2]);
    readyToMoveItemFromBox2 = [];
  };
  return (
    <div className="container">
      <div className="box">
        <div>
          <h1>Box1</h1>
          {listOfBox1Students.map((student) => {
            return (
              <div key={student.id}>
                <input
                  type="checkbox"
                  name="students"
                  value={student.id}
                  onChange={(e) => {
                    console.log("Event", student, e.target.checked);
                    editReadyToMoveItem(e.target.checked, student);
                  }}
                />
                <label for={student.id}> {student.name}</label>
              </div>
            );
          })}
        </div>
      </div>
      <div className="arrow-container">
        <div className="arrow" onClick={moveItemFromBox1}>{`=========>`}</div>
        <div className="arrow" onClick={moveItemFromBox2}>{`<=========`}</div>
      </div>
      <div className="box">
        <div>
          <h1>Box2</h1>
          {listOfBox2Students.map((student) => {
            return (
              <div key={student.id}>
                <input
                  type="checkbox"
                  name="students"
                  value={student.id}
                  onChange={(e) => {
                    editReadyToMoveItemFromBox2(e.target.checked, student);
                  }}
                />
                <label for={student.id}> {student.name}</label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
