---
title: Andreas’ digital garden 🌿
layout: base
---

{% include 'intro' %}

## Posts

<ul>
  {% assign posts = collections.posts | reverse %}
  {% for post in posts %}
  <li><a href="{{- post.url -}}">{{- post.data.title -}}</a></li>
  {% endfor %}
</ul>

## Elsewhere

<ul>
  {% for link in elsewhere %}
  <li><a href="{{- link.url -}}">{{- link.title -}}</a></li>
  {% endfor %}
  <li><a href="#">Email me</a></li>
</ul>
