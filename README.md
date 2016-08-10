autoform-markdown-editor
----
A github like markdown editor using autoform and perak:markdown

Install
----
```
meteor add lnmunhoz:autoform-markdown-editor
```


Usage
-----

Add a custom template in your Schema

```js
Schemas.Task = new SimpleSchema({
  description: {
    type: String,
    autoform: {
      type: 'markdownEditor'
    }
  }
});

```

![demo](http://g.recordit.co/edwBuvFkUp.gif)

License
----

[MIT License](http://lnmunhoz.mit-license.org) © Lucas N. Munhoz
