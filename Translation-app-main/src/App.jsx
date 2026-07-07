import { useState } from "react";



function App() {
  const [text, setText] = useState('');
  const [language, setLanguage] = useState('Spanish');
  const [translation, setTranslation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleTranslate = async () => {
    if (!text.trim()) return;
    setIsLoading(true);
    setError('');
    setTranslation('');

    try {
    
      
  
      const response = await chat.completions.create({
       
      });

     

    } catch (err) {
      if (err.status === 429) {
        setError('(Too Many Requests).');
      } 
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-blue-200 flex flex-col items-center py-12 px-4 select-none">
      <div className="max-w-2xl w-full bg-slate-100 rounded-lg shadow-md p-6 border border-slate-100">
        <h1 className="text-3xl font-extrabold text-center text-slate-800 mb-2">PollyGlot</h1>
        <p className="text-center text-slate-500 mb-8">Intelligent App of Text Translation.</p>
        
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-700 mb-2">Main Text</label>
          <textarea
            className="w-full h-32 p-4 rounded-xl bg-white border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition duration-200 resize-none text-slate-700 font-bold"
            placeholder="Write Your Text here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1">
            <label className="block text-sm font-semibold text-slate-900 mb-2">Targeted Language</label>
            <select 
              className="w-full p-3 rounded-xl border border-slate-200 bg-white text-slate-700 focus:ring-2 focus:ring-blue-500 outline-none transition duration-200"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
              <option value="German">German</option>
              <option value="Arabic">Arabic</option>
              <option value="Persian">Persian</option>
            </select>
          </div>
          <div className="flex items-end">
            <button
              onClick={handleTranslate}
              disabled={isLoading || !text.trim()}
              className="w-full sm:w-auto bg-blue-900 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl shadow-sm transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Translating...' : 'Translate it'}
            </button>
          </div>
        </div>

        {error && (
          <div className="mb-5 p-4 bg-red-50 text-red-600 rounded-xl text-sm border border-red-100">
            {error}
          </div>
        )}

        <div className="border-t border-slate-100 pt-5">
          <label className="block text-sm font-semibold text-slate-800 mb-2">Translation:</label>
          <div className="w-full min-h-[100px] p-4 bg-blue-900 rounded-xl border border-slate-100 text-white whitespace-pre-wrap">
            {translation || <span className="text-white font-bold italic text-sm">No Translation Yet...</span>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;