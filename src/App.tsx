import FruitList from "./components/FruitList";
import PrimaryButton from "./components/PrimaryButton";
import Users from "./components/Users";

export default function App() {
  return (
    <div>
      {/* <h1>I am learning testing.</h1> */}
      {/* <PrimaryButton /> */}
      <Users
        initialUsers={[
          { id: "1", name: "Golam Rabbani", title: "developer", role: "admin" },
        ]}
      />
      {/* <FruitList fruits={["Apple", "Mango", "Banana"]} /> */}
    </div>
  );
}
