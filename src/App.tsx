import { useState } from "react";
import InputField from "./components/InputField";
import DataTable, { type Column } from "./components/DataTable";

interface User {
  id: number;
  name: string;
  age: number;
}

const sampleData: User[] = [
  { id: 1, name: "Alice", age: 24 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 22 },
];

const columns: Column<User>[] = [
  { key: "name", title: "Name", dataIndex: "name", sortable: true },
  { key: "age", title: "Age", dataIndex: "age", sortable: true },
];

function App() {
  const [value, setValue] = useState("");

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-xl font-bold">Demo Components</h1>

      <InputField
        label="Username"
        placeholder="Enter username"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        helperText="Helper text here"
      />

      <DataTable<User>
        data={sampleData}
        columns={columns}
        selectable
        onRowSelect={(rows) => console.log("Selected Rows:", rows)}
      />
    </div>
  );
}

export default App;
