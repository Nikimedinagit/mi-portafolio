const SectionHeader = ({ title }) => {
  return (
    <div className="mb-9">
      <div className="flex items-center gap-3">
        <span
          className="font-mono text-2xl font-black tracking-[-0.2em] text-blue-600 md:text-3xl"
          aria-hidden="true"
        >
          //
        </span>

        <h2 className="text-3xl font-black leading-none tracking-tight text-foreground md:text-4xl">
          {title}
        </h2>
      </div>

      <div className="mt-3 flex w-full items-center gap-2" aria-hidden="true">
        <span className="h-1 w-14 rounded-full bg-blue-600" />
        <span className="h-px max-w-52 flex-1 bg-gradient-to-r from-blue-300/80 to-transparent dark:from-blue-800/70" />
      </div>
    </div>
  );
};

export default SectionHeader;
