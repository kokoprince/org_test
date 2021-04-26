
        $(".print").click(function () { 
          var body=$('.content_report').html();
          var newWindow = window.open(); 
          $(document).ready(function () {
            newWindow.document.write('<link rel="stylesheet" href="css/mdb.min.css" />');
            newWindow.document.write('<link rel="stylesheet" href="css/style.css" />');
            newWindow.document.write(body);
            $('.content_report').ready(function(){
              $("img").ready(function(){
                $("link").ready(function(){
                  newWindow.print();
                  newWindow.close();
                });
              });
            });
          });
        });
        function month(){
          var date_=new Date;
          return date_.getMonth();
        }
        function day(){
          var date_=new Date;
          return date_.getDay();
        }

        