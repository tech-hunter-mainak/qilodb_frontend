// components/ReadmeViewer.js
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import 'github-markdown-css/github-markdown.css';
import '../ReadmeViewer.css'; // 👈 add this

const ReadmeViewer = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/tech-hunter-mainak/qilodb_frontend/main/README.md')
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <div className="markdown-body custom-markdown !pt-28 !pb-10 px-6 sm:!px-10 lg:!px-20 !bg-white min-h-screen">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {markdown}
      </ReactMarkdown>
    </div>
  );
};

export default ReadmeViewer;
