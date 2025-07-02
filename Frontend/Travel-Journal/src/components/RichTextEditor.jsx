import React, { useEffect, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function RichTextEditor({ value = '', onChange }) {
  const [content, setContent] = useState(value);

  // Update local state if parent prop changes
  useEffect(() => {
    setContent(value);
  }, [value]);

  // Handle editor change
  const handleEditorChange = (newContent) => {
    setContent(newContent);
    if (onChange) onChange(newContent); // notify parent
  };

  return (
    <Editor
      apiKey='ecnyc079ng4uvz79wnz5b1p3gk1io9gtao95zij91f8mg2im'
      value={content}
      onEditorChange={handleEditorChange}
      init={{
        plugins: [
          'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
          'checklist', 'mediaembed', 'casechange', 'formatpainter', 'pageembed', 'a11ychecker', 'tinymcespellchecker', 'permanentpen', 'powerpaste',
          'advtable', 'advcode', 'editimage', 'advtemplate', 'ai', 'mentions', 'tinycomments', 'tableofcontents', 'footnotes', 'mergetags',
          'autocorrect', 'typography', 'inlinecss', 'markdown', 'importword', 'exportword', 'exportpdf'
        ],
        toolbar:
          'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | ' +
          'addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | ' +
          'emoticons charmap | removeformat',
        tinycomments_mode: 'embedded',
        tinycomments_author: 'Author name',
        mergetags_list: [
          { value: 'First.Name', title: 'First Name' },
          { value: 'Email', title: 'Email' },
        ],
        ai_request: (request, respondWith) =>
          respondWith.string(() => Promise.reject('See docs to implement AI Assistant')),
      }}
    />
  );
}
