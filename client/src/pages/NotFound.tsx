export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl font-light tracking-widest text-stone-800 mb-4">404</h1>
      <p className="text-stone-500 text-lg mb-8">This page doesn't exist — but the work does.</p>
      <a href="/" className="text-sm tracking-widest uppercase text-stone-700 underline underline-offset-4">
        Back to Artifact
      </a>
    </div>
  );
}
