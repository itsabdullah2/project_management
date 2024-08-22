const StateBar = () => {
  return (
    <div className="text-offWhite mt-8">
      <div className="flex items-center justify-between gap-4">
        <div>
          <label htmlFor="queue" className="flex-1 border rounded-md">
            In Queue
          </label>
        </div>
        <span className="flex-1 border rounded-md">On Progress</span>
        <span className="flex-1 border rounded-md">Testing</span>
        <span className="flex-1 border rounded-md">Completed</span>
        <span className="flex-1 border rounded-md">Closed</span>
      </div>
    </div>
  );
};

export default StateBar;
