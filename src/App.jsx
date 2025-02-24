import AppRouter from "./router";
import { AuthProvider } from "./context/AuthContext";
import PWABadge from "./PWABadge.jsx";

function App() {
  return (
    <AuthProvider>
      <div className="bg-white min-h-screen"> 
      <PWABadge />
        <AppRouter />
      </div>
    </AuthProvider>
  );
}

export default App;
