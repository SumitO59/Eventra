import Button from "./components/ui/Button";

function App() {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col justify-center items-center gap-4">

      <Button>
        Primary
      </Button>

      <Button variant="secondary">
        Secondary
      </Button>

      <Button variant="outline">
        Outline
      </Button>

      <Button size="sm">
        Small
      </Button>

      <Button size="lg">
        Large
      </Button>

      <Button disabled>
        Disabled
      </Button>

    </div>
  );
}

export default App;