// on hover change border color and nav color to the color of the letter

$(document).ready(function() {
          $("#n").hover(function() {
              $("#left, #right, #top, #bottom, #nav").css("background", "#ef4260");  
          });
        });

$(document).ready(function() {
          $("#a").hover(function() {
              $("#left, #right, #top, #bottom, #nav").css("background", "#cfde28");  
          });
        });

$(document).ready(function() {
          $("#b").hover(function() {
              $("#left, #right, #top, #bottom, #nav").css("background", "#11aece");  
          });
        });

$(document).ready(function() {
          $("#i").hover(function() {
              $("#left, #right, #top, #bottom, #nav").css("background", "#fba21c");  
          });
        });



$(document).ready(function() {
          $("#l").hover(function() {
              $("#left, #right, #top, #bottom, #nav").css("background", "#ae2c92");  
          });

        });


$(document).ready(function() {
          $("#a2").hover(function() {
              $("#left, #right, #top, #bottom, #nav").css("background", "#fbe200");  
          });

        });
// on hover de-animate letter... and on mouseout re-animate letter

$("#n img").on({
 "mouseover" : function() {
    this.src = 'images/logo/nr.gif';
  },
  "mouseout" : function() {
    this.src='images/logo/n.gif';
  }
});


$("#a img").on({
 "mouseover" : function() {
    this.src = 'images/logo/ar.gif';
  },
  "mouseout" : function() {
    this.src='images/logo/a.gif';
  }
});

$("#b img").on({
 "mouseover" : function() {
    this.src = 'images/logo/br.gif';
  },
  "mouseout" : function() {
    this.src='images/logo/b.gif';
  }
});

$("#i img").on({
 "mouseover" : function() {
    this.src = 'images/logo/ir.gif';
  },
  "mouseout" : function() {
    this.src='images/logo/i.gif';
  }
});

$("#l img").on({
 "mouseover" : function() {
    this.src = 'images/logo/lr.gif';
  },
  "mouseout" : function() {
    this.src='images/logo/l.gif';
  }
});

$("#a2 img").on({
 "mouseover" : function() {
    this.src = 'images/logo/a2r.gif';
  },
  "mouseout" : function() {
    this.src='images/logo/a2.gif';
  }
});