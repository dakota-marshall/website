---
title: Projects
layout: layout.html
---
<style>

.imageList {
    display: flex;
    flex-wrap: wrap;
    padding: 2px;
    margin-left: auto;
    margin-right: auto;
}

.artImage {
        width: 100%;
        max-width: 125px;
        padding: 2px;
}

</style>
<div style="text-align: center;">

<h1><img src="/static/imgs/wizardstufflogo.gif" style="width: 75%;"/></h1>

<img src="/static/imgs/femalewizard.gif" style="width: 35%;"/>

Here a are a list of the projects I am working on! 

## Art

### [Blender Renders](/content/art/)


<div class="imageList">
{% for art in collections.art reversed limit:9 %}
<div class="imageEntry" id="{{ art.data.title }}">
    <a href="/content/art/#{{ art.data.title }}">
        {% if art.data.urltype == 'img' %}
        <img class="artImage" src="{{ art.data.arturl }}">
        {% endif %}
        {% if art.data.urltype == 'vid' %}
        <video class="artImage" autoplay muted loop>
            <source src="{{ art.data.arturl }}">
        </video>
        {% endif %}
    </a>
</div>
{% endfor %}
</div>
<a href="/content/art/">See them all!...</a>
</br>
</br>
<a href="/art/feed.xml">
<img src="/static/imgs/Subscribe.gif" style="text-align: center; width: 150px;" />
</a>
</br>
<img src="/static/imgs/lightning-sep.gif" style="width: 70%;"/>

## Pico Games

Games I have made in Pico-8! Save the cart image, or click it to open the web version! To see the source code, click the title.

<div>
    <a href="https://github.com/dakota-marshall/pico-games/blob/main/bards-tale.p8"><h3>A Bards Tale</h3></a>
    <a href="/content/pico-games/bards-tale/">
        <img src="/static/imgs/pico-carts/bards-tale.p8.png"/>
    </a>
</div>

<img src="/static/imgs/lightning-sep.gif" style="width: 70%;"/>

## Coding

### [OGS-Python](https://ogs-python.dakotamarshall.net/) 

[![GitLab last commit](https://img.shields.io/gitlab/last-commit/dakota.marshall%2Fogs-python)](https://gitlab.com/dakota.marshall/ogs-python/-/commits/main) [![made-with-python](https://img.shields.io/badge/Made%20with-Python-1f425f.svg)](https://www.python.org/) [![PyPI version](https://badge.fury.io/py/ogsapi.svg)](https://badge.fury.io/py/ogsapi)

OGS Python is an API wrapper written in Python for the Go server I play on, [online-go.com](https://online-go.com). Its been a fun challenge in learning how to integrate with both a REST API, and a realtime Socket.IO API, and how to act as a middle-man between the client and server.

<img src="/static/imgs/lightning-sep.gif" style="width: 70%;"/>

### [Heathcliff-RSS](https://gitlab.com/dakota.marshall/heathcliff-rss)

[![GitLab last commit](https://img.shields.io/gitlab/last-commit/dakota.marshall%2Fheathcliff-rss)](https://gitlab.com/dakota.marshall/heathcliff-rss/-/commits/main) [![made-with-python](https://img.shields.io/badge/Made%20with-Python-1f425f.svg)](https://www.python.org/)

This is an application I wrote to be able to get Heathcliff comics in my RSS feed. It was an interesting test project for learning how to use the Selenium library for interacting and scraping data from webpages, and how to deploy a python script as a full application.

<img src="/static/imgs/lightning-sep.gif" style="width: 70%;"/>

### [AutoClicker](https://github.com/dakota-marshall/autoclicker)

[![GitLab last commit](https://img.shields.io/gitlab/last-commit/dakota.marshall%2Fautoclicker)](https://gitlab.com/dakota.marshall/autoclicker/-/commits/main) [![made-with-go](https://img.shields.io/badge/Made%20with-Go-1f425f.svg)](https://go.dev/) 

Just a simple autoclicker I wrote in Go. I originally wrote this for a friend in Python, but wanted to practice making a real package in Go, so I converted it. I added a GUI using the Fyne toolkit, and used robotogo for the keyboard event handling.

</div>
