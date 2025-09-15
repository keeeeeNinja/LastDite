<%* const NEW_TITLE = await tp.user.updateTitle(tp) -%>
---
title: <% NEW_TITLE ?? tp.file.title %>
date: "<% tp.date.now('YYYY-MM-DD') %>"
tags:
  - "type/session"
---
