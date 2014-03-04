var viewPortTag = document.createElement('meta'); viewPortTag.name = "viewport"; viewPortTag.content = "width=device-width, initial-scale=1.0";
document.getElementsByTagName('head')[0].insertBefore(viewPortTag, document.getElementsByTagName('title')[0]);



require(['jquery', 'underscore', 'angularjs'], function ($, _) {
});

function Ctrl($scope) {
  var locationSplit = location.href.split('?');
  
  if(locationSplit.length == 2){
    $scope.template = 'documents/' + locationSplit[1] + '.html';
  } else {
    $scope.template = 'documents/start.html';
  }
}

function Markdown($element){
  require(['jquery', 'markdown/markdown'], function($, markdown){
    var element = $($element);
    
    element.html(markdown.toHTML(element.html()));
  });
}