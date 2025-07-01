import { supabase } from '../../lib/supabaseClient';

export default async function Home() {
  const { data: reviewers, error } = await supabase.from('reviewers').select('*');

  if (error) {
    return <div className="text-red-600">Error: {error.message}</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Reviewers</h1>
      <ul className="space-y-2">
        {reviewers?.map((reviewer: any) => (
          <li key={reviewer.id} className="border p-4 rounded">
            {reviewer.name || JSON.stringify(reviewer)}
          </li>
        ))}
      </ul>
    </div>
  );
}
