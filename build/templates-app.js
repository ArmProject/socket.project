angular.module('templates-app', ['main/template/login.tpl.html', 'main/template/main.tpl.html', 'main/template/menu_left.tpl.html', 'main/template/menu_right.tpl.html', 'menu_left/template/drive.tpl.html', 'menu_left/template/drive_quiz.tpl.html', 'menu_left/template/drive_slide.tpl.html', 'menu_left/template/hand_write.tpl.html', 'menu_left/template/home_student.tpl.html', 'menu_left/template/home_teacher.tpl.html', 'menu_left/template/quiz_student.tpl.html', 'menu_left/template/quiz_teacher.tpl.html', 'menu_left/template/slide.tpl.html', 'menu_right/template/chat.tpl.html', 'menu_right/template/group.tpl.html']);

angular.module("main/template/login.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("main/template/login.tpl.html",
    "<span id=\"signinButton\">\n" +
    "  <span\n" +
    "    class=\"g-signin\"\n" +
    "    data-callback=\"signinCallback\"\n" +
    "    data-clientid=\"459319943069-8qa7ada6rk80bqrmmnmdr37n08ejnke0.apps.googleusercontent.com\"\n" +
    "    data-cookiepolicy=\"single_host_origin\"\n" +
    "    data-requestvisibleactions=\"http://schemas.google.com/AddActivity\"\n" +
    "    data-scope=\"https://www.googleapis.com/auth/plus.login\n" +
    "     https://www.googleapis.com/auth/userinfo.email\n" +
    "     https://www.googleapis.com/auth/drive\">\n" +
    "  </span>\n" +
    "</span>");
}]);

angular.module("main/template/main.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("main/template/main.tpl.html",
    "<div ng-controller=\"MainCtrl\" ng-swipe-left=\"checkSwipe(true)\" ng-swipe-right=\"checkSwipe(false)\">\n" +
    "\n" +
    "	<menu-left class=\"navbar navbar-fixed-top\"></menu-left>\n" +
    "	\n" +
    "	<div class=\"fluid-container\">\n" +
    "		<div class=\"row fit-height\">\n" +
    "			<div class=\"well col-md-9 col-lg-9 fit-height\">\n" +
    "				<ui-view></ui-view>\n" +
    "			</div>\n" +
    "			<div class=\"well col-md-3 col-lg-3 visible-md visible-lg fit-height\">\n" +
    "				<menu-right></menu-right>\n" +
    "			</div>					\n" +
    "			<div ng-show=\"isShow\" class=\"nav-right\">\n" +
    "				<div class=\"visible-xs visible-sm fit-height\">\n" +
    "					<menu-right></menu-right>\n" +
    "				</div>\n" +
    "			</div>	\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("main/template/menu_left.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("main/template/menu_left.tpl.html",
    "<div>\n" +
    "	<a ui-sref=\"main.home_{{access}}\">Home</a>\n" +
    "	<a ui-sref=\"main.drive\">Drive</a>\n" +
    "	<a ui-sref=\"main.draw\">Draw</a>\n" +
    "	<a ui-sref=\"main.slide\">Slide</a>\n" +
    "	<a ui-sref=\"main.quiz_{{access}}\">Quiz</a>\n" +
    "</div>");
}]);

angular.module("main/template/menu_right.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("main/template/menu_right.tpl.html",
    "<div ng-hide=\"isHide\">\n" +
    "	<!-- <ul>\n" +
    "    	<li ng-repeat=\"menu in menus\">\n" +
    "    		<a href=\"javascript:void(0)\" ng-click=\"setCurrent($index)\">{{menu}}</a>\n" +
    "    	</li>\n" +
    "	</ul> -->\n" +
    "\n" +
    "	<div ng-switch on=\"current\">\n" +
    "		<group ng-switch-when=\"group\"></group>\n" +
    "		<chat ng-switch-when=\"chat\"></chat>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("menu_left/template/drive.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("menu_left/template/drive.tpl.html",
    "<div  class=\"container fit-height list\">\n" +
    "	<ul ng-init=\"tab = 'slide'\">\n" +
    "		<li><a ng-click=\"tab = 'slide'\">Slide</a></li>\n" +
    "		<li><a ng-click=\"tab = 'quiz'\">Quiz</a></li>\n" +
    "	</ul>\n" +
    "\n" +
    "	<div ng-switch on=\"tab\">\n" +
    "		<drive-slide ng-switch-when=\"slide\"></drive-slide>\n" +
    "		<drive-quiz ng-switch-when=\"quiz\"></drive-quiz>\n" +
    "	</div>\n" +
    "</div> ");
}]);

angular.module("menu_left/template/drive_quiz.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("menu_left/template/drive_quiz.tpl.html",
    "<div class=\"row\">\n" +
    "	<div class=\"well col-lg-8 fit-height\" ng-repeat=\"data in datas\" ng-click=\"select($index)\">\n" +
    "		{{data}}\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("menu_left/template/drive_slide.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("menu_left/template/drive_slide.tpl.html",
    "<div>\n" +
    "	<div style=\"display:none;\">\n" +
    "		<canvas id=\"data\"/>\n" +
    "	</div>\n" +
    "	<button ng-click=\"saveSlide()\">Save Slide</button>\n" +
    "	<button ng-click=\"saveDraw()\">Save Draw</button>\n" +
    "	<div class=\"container fit-height item\">\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"well col-lg-8\" ng-repeat=\"data in datas\" ng-click=\"select($index)\">\n" +
    "				{{data.title}}\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("menu_left/template/hand_write.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("menu_left/template/hand_write.tpl.html",
    "<div ng-swipe-up=\"checkSwipe(false)\" ng-swipe-down=\"checkSwipe(true)\">\n" +
    "	<div style=\"display:none;\">\n" +
    "		<canvas id=\"data\"/>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"pad\">\n" +
    "		<canvas id=\"draw\" hand-writer text=\"{{text}}\" send=\"{{isSend}}\"></canvas>\n" +
    "		<input id=\"textbox\" ng-model=\"text\">\n" +
    "	</div>\n" +
    "	<div class=\"toolbar\" ng-hide=\"isHide\">\n" +
    "		<button ng-repeat=\"t in tools\" ng-click=\"changeTool($index)\">{{t}}</button>\n" +
    "		<button ng-repeat=\"a in attrs\" ng-click=\"changeAttr($index)\">{{a}}</button>\n" +
    "	</div>\n" +
    "	\n" +
    "</div>");
}]);

angular.module("menu_left/template/home_student.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("menu_left/template/home_student.tpl.html",
    "<div>\n" +
    "	<select ng-model=\"room\" ng-options=\"room for room in rooms\"></select>\n" +
    "	<button ng-click=\"list()\">List</button>		\n" +
    "	<button ng-click=\"connect()\">Connect</button>		\n" +
    "	<button ng-click=\"disconnect()\">Disconnect</button>\n" +
    "</div>\n" +
    "");
}]);

angular.module("menu_left/template/home_teacher.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("menu_left/template/home_teacher.tpl.html",
    "<div>\n" +
    "	<input type=\"text\" ng-model=\"room\">\n" +
    "	<button ng-click=\"create()\">Create Room</button>\n" +
    "	<button ng-click=\"close()\">Close Room</button>\n" +
    "</div>");
}]);

angular.module("menu_left/template/quiz_student.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("menu_left/template/quiz_student.tpl.html",
    "<div>\n" +
    "    <div ng-hide=\"isEnd\">\n" +
    "        <div>{{question}}</div>\n" +
    "        <div ng-repeat=\"ans in answer\">\n" +
    "            <input type=\"radio\" name=\"answer\" ng-click=\"select($index)\" ng-checked=\"$index==0\"/>\n" +
    "            {{ans}}\n" +
    "        </div>\n" +
    "        <button ng-click=\"next()\">Next</button>\n" +
    "    </div>    \n" +
    "\n" +
    "    <div ng-show=\"isEnd\">\n" +
    "        Finish!!!!\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("menu_left/template/quiz_teacher.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("menu_left/template/quiz_teacher.tpl.html",
    "<div>\n" +
    "	<div ng-repeat=\"q in quiz\">\n" +
    "		<div>\n" +
    "			{{q.question}}\n" +
    "		</div>\n" +
    "		<div ng-repeat=\"answer in q.answer\">\n" +
    "			{{answer.n}}\n" +
    "			{{answer.name}}\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("menu_left/template/slide.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("menu_left/template/slide.tpl.html",
    "<div ng-swipe-up=\"checkSwipe(false)\" ng-swipe-down=\"checkSwipe(true)\">\n" +
    "\n" +
    "	<div class=\"pad\">\n" +
    "		<div class=\"control-area\" ng-show=\"isShow\" ng-click=\"prevIndex(false)\"></div>\n" +
    "		<div class=\"control-area\" ng-show=\"isShow\" ng-click=\"nextIndex(false)\"></div>\n" +
    "		<div class=\"mirror\" fit-size>\n" +
    "			<canvas id=\"mirror-1\" hand-writer text=\"{{text}}\" send=\"{{isSend}}\">\n" +
    "			</canvas>	\n" +
    "			<input 	id=\"textbox\" ng-model=\"text\">	\n" +
    "		</div>	\n" +
    "		<div class=\"slide-pad\" fit-size>\n" +
    "			<slide send=\"{{isSend}}\"></slide>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"toolbar\" style=\"position: absolute;z-index=99\">\n" +
    "		<div>\n" +
    "			<button ng-click=\"prevIndex(true)\" ng-hide=\"isStart\">Prev</button>\n" +
    "			<button ng-click=\"nextIndex(true)\" ng-hide=\"isEnd\">Next</button>\n" +
    "		</div>\n" +
    "		<div ng-hide=\"isHide\">\n" +
    "			<button ng-repeat=\"t in tools\" ng-click=\"changeTool($index)\">{{t}}</button>\n" +
    "			<button ng-repeat=\"a in attrs\" ng-click=\"changeAttr($index)\">{{a}}</button>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	\n" +
    "</div>");
}]);

angular.module("menu_right/template/chat.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("menu_right/template/chat.tpl.html",
    "<div>\n" +
    "	<div class=\"chat-box\">\n" +
    "		<div ng-repeat=\"msg in msgs\">\n" +
    "			<img ng-src=\"{{msg}}\" class=\"emotion\">\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<!-- <button ng-click=\"sendMsg()\">Send</button>\n" +
    "	<input type=\"text\" ng-model=\"text\"> -->\n" +
    "	<div class=\"emoticon-box\">\n" +
    "		<emoticon emotion=\"img\"></emoticon>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("menu_right/template/group.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("menu_right/template/group.tpl.html",
    "<div>\n" +
    "	<div ng-repeat=\"group in groups\">\n" +
    "		\n" +
    "		<div class=\"well\">\n" +
    "			<img class=\"thumbnail\" ng-src=\"{{group.image}}\" ng-click=\"toggle($index)\"/>\n" +
    "		</div>\n" +
    "\n" +
    "	</div>\n" +
    "</div>");
}]);
