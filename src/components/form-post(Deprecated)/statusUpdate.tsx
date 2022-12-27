import StatusUpdateForm from "./statusUpdateForm";

type StatusUpdateType = {
  id: string;
  status: string;
  timestamp: Date;
};

export default function StatusUpdate({
  updates,
}: {
  updates?: StatusUpdateType[];
}) {
  return (
    <div className="mb-4 rounded-lg bg-white p-6 shadow-lg">
      <StatusUpdateForm />
      <hr className="my-6" />
      {updates?.map((update: StatusUpdateType) => (
        <div key={update.id} className="mb-6">
          <p className="mb-2 text-sm text-gray-700">{update.status}</p>
          <div className="text-xs text-gray-600">
            {update.timestamp.toLocaleString()}
          </div>
        </div>
      ))}
    </div>
  );
}
