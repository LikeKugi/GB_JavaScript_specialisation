(async () => {
  const placeImg = (data, template) => {
    const img = template.querySelector('#imgPlaceholder');
    img.src = data.hdurl;
    const caption = template.querySelector('#imgCaption');
    caption.innerHTML = data.explanation;
    return template;
  };

  const createPlaceholder = () => {
    const template = document.querySelector('#img_template');
    const img = template.content.cloneNode(true);
    return img;
  };

  const placeImgInBody = (img) => {
    document.body.append(img);
  };

  const response = fetch(
    'https://api.nasa.gov/planetary/apod?api_key=VG7hcoFMcSvGDhlJh3ylikHVk7Q8Q4Op8ZFDomGN&count=5',
    {
      method: 'GET',
    },
  );
  try {
    const data = await response;
    const jsoned = await data.json();
    console.log(jsoned);
    jsoned.forEach((element) => {
      let img = createPlaceholder();
      img = placeImg(element, img);
      placeImgInBody(img);
    });
  } catch (e) {
    console.error(e);
  }
})();
