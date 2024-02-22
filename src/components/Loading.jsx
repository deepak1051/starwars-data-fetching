const Loading = () => {
  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <div className="flex flex-col gap-4">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            className="loading h-12 w-full rounded bg-slate-400"
            key={i}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
