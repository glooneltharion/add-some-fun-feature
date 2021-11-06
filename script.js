var first = $('.first'),
    second = $('.second'),
    last = $('.last'),
    btn = $('button'),
    style = {
        background: "yellow" 
    };

first.on('click', () => {
        console.log("Yeah, you clicked me' to the console when the user clicks on the button")
      });

second.on('click', () => {
    first.text('Clicked');
  });

last.on('click', () => {
    btn.css(style);
  });