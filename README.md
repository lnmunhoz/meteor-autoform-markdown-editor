autoform-markdown-editor
========

A github like markdown editor using autoform and perak:markdown

Usage
-----

Add a custom template in your Schema

```
Schemas.Task = new SimpleSchema({
  description: {
    type: String,
    autoform: {
      type: 'markdownEditor'
    }
  }
});
```

Render markdown text using the renderMarkdown helper in your template

```
<template name="quest">
  <h1>{{title}}</h1>
  {{{renderMarkdown text}}}
</template>
```

For more info and usage see: https://github.com/chjj/marked#usage
