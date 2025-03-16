import AppRouter from "./router";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="bg-white min-h-screen">
        <AppRouter />
      </div>
    </AuthProvider>
  );
}

export default App;
