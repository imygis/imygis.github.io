# Slide 0
> best quote ever.
notes: aaa

---


<!-- .slide: data-transition="zoom" data-transition-speed="slow" -->
## Slide 1
A paragraph with some text and a [link](https://hakim.se).

----

### Vertical Slide 1
<aside class="notes">
  Shhh, these are your private notes 📝
</aside>

----

### Vertical Slide 2

---

## Slide 2
```js [712: 1-2|3|1,3-4]
let a = 1;
let b = 2;
let c = x => 1 + 2 + x;
c(3);
```
```python [1|3-6]
n = 0
while n < 10:
  if n % 2 == 0:
    print(f"{n} is even")
  else:
    print(f"{n} is odd")
  n += 1
```

---

## Slide 3
<p class="fragment">Fade in</p>
<p class="fragment fade-out">Fade out</p>
<p class="fragment highlight-red">Highlight red</p>
<p class="fragment fade-in-then-out">Fade in, then out</p>
<p class="fragment fade-up">Slide up while fading in</p>
<span class="fragment fade-in">
  <span class="fragment highlight-red">
    <span class="fragment fade-out">
      Fade in > Turn red > Fade out
    </span>
  </span>
</span>
<p class="fragment" data-fragment-index="3">Appears last</p>
<p class="fragment" data-fragment-index="1">Appears first</p>
<p class="fragment" data-fragment-index="2">Appears second</p>

---

## Slide 4
`$$ J(\theta_0,\theta_1) = \sum_{i=0} $$`
`\[\begin{aligned}
\dot{x} = \sigma(y-x) \\
\dot{y} = \rho x - y - xz \\
\dot{z} = -\beta z + xy
\end{aligned} \]`
notes: Wrap the formula in backticks. This prevents syntax conflicts between LaTeX and Markdown.
公式格式参看 https://katex.org/

---

## Slide 5
- Item 1 <!-- .element: class="fragment" data-fragment-index="2" -->
- Item 2 <!-- .element: class="fragment" data-fragment-index="1" -->

---

<!-- .slide: data-background="rgb(70, 70, 255)" -->
## Slide 6
Color Backgrounds<br/>
data-background-color="rgb(70, 70, 255)"
"#ff0000"
<h2>🍰</h2>

---

<!-- .slide: data-background="radial-gradient(#283b95, #17b2c3)" -->
## Slide 7
Gradient Backgrounds<br/>
All CSS gradient formats are supported,
    including linear-gradient, radial-gradient and conic-gradient.
        linear-gradient(to bottom, #283b95, #17b2c3)
        radial-gradient(#283b95, #17b2c3)

<video data-autoplay src="https://static.slid.es/site/homepage/v1/homepage-video-editor.mp4"></video>
<video data-autoplay width="320" height="240" controls>
  <source src="http://localhost:10001/demodata/video.webm">
  缺少视频资源 或 您的浏览器不支持 video 标签
</video>
<!-- Lazy Loading
To enable lazy loading all you need to do is change your src attributes to data-src
This is supported for image, video, audio and iframe elements
-->
<video data-autoplay data-src="https://static.slid.es/site/homepage/v1/homepage-video-editor.mp4">
</video>

---

<!-- .slide: data-background="./img/boardmarker-red.png" -->
## Slide 8
Image Backgrounds<br/>
<h2>🐳</h2>

---

## Slide 9
todo Video Backgrounds<br/>
<h2>🐳</h2>
<section data-background-video="https://static.slid.es/site/homepage/v1/homepage-video-editor.mp4"
  data-background-video-loop data-background-video-muted>
  Slide 6
  <h2>🐳</h2>
</section>
无效 <!-- .slide: data-background="https://static.slid.es/site/homepage/v1/homepage-video-editor.mp4" -->

---

## Slide 10
Iframe Backgrounds<br/>
<section data-background-iframe="https://cn.bing.com/"
  data-background-interactive>
  Slide 7
  <h2>🐳</h2>
</section>
无效 <!-- .slide: data-background="https://cn.bing.com/" data-background-interactive-->

---

<!-- Layout https://revealjs.com/layout/
helper classes for controlling the layout and styling your content
If you're looking to change the sizing, scaling and centering of your presentation please see Presentation Size. https://revealjs.com/presentation-size/
-->
<section>Slide 11
  <div class="r-stack">
    <img class="fragment" src="https://placekitten.com/450/300" width="450" height="300">
    <img class="fragment" src="https://placekitten.com/300/450" width="300" height="450">
    <img class="fragment" src="https://placekitten.com/400/400" width="400" height="400">
  </div>
  <!-- If you want to show each of the stacked elements individually you can adjust the fragment settings: -->
  <div class="r-stack">
    <img class="fragment fade-out" src="https://placekitten.com/450/300" width="450" height="300">
    <img class="fragment current-visible" src="https://placekitten.com/300/450" width="300" height="450">
    <img class="fragment" src="https://placekitten.com/400/400" width="400" height="400">
  </div>
</section>

---

# Slide over
<h2>🐳 谢谢</h2>


