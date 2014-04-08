app.service('QuizManager', [
  '$q',
  '$http',
  'host_drupal',
  function ($q, $http, host_drupal) {
    var self = this;
    this.index = 0;
    this.list = function (name) {
      var deferred = $q.defer();
      $http.jsonp(host_drupal + '/rest/views/list_webform?args=' + name + '&callback=JSON_CALLBACK').then(function (data) {
        var items = data.data;
        var quizs = [];
        angular.forEach(items, function (item, key) {
          quizs.push({
            title: item['title'],
            date: item['updated date'],
            node: item['nid']
          });
        });
        deferred.resolve(quizs);
      });
      return deferred.promise;
    };
    this.load = function () {
      var deferred = $q.defer();
      $http.jsonp(host_drupal + '/rest/node/' + self.node + '?callback=JSON_CALLBACK').then(function (data) {
        var items = data.data.webform.components;
        var quizs = [];
        angular.forEach(items, function (item, key) {
          var obj = {};
          obj.question = item.name;
          var answers = [];
          angular.forEach($.trim(item.extra.items).split('\n'), function (answer, key) {
            var value = answer.split('|');
            answers.push(value[1]);
          });
          obj.answer = answers;
          quizs.push(obj);
        });
        deferred.resolve(quizs);
      });
      return deferred.promise;
    };
    var data = {
        series: [],
        categories: []
      };
    this.setMaxChoice = function (n) {
      for (var i = 1; i <= n; i++) {
        data.series.push(0);
        data.categories.push(i + '');
      }
    };
    this.chartConfig = {
      options: { chart: { type: 'column' } },
      series: [{
          data: data.series,
          showInLegend: false
        }],
      title: { text: '' },
      loading: false,
      xAxis: {
        categories: data.categories,
        title: { text: 'Choices' }
      }
    };
  }
]);