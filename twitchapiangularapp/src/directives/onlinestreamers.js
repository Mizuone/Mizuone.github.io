angular.module('fcc_twitch_api').directive('onlineStreamers', function() {
  return {
    template: '<div class="streamer-container" ng-repeat="stream in streamInformation.streamersStream | searchStreamers:inputValue" ng-if="stream.stream !== null"> <a rel="noopener noreferrer" target="_blank" href="https://www.twitch.tv/{{ streamInformation.streamer(stream._links.self) }}"><div class="online-streamer"><img class="streamer-logo" src="{{ stream.stream.channel.logo }}" width="64" height="64"><div class="streamer-details-container"><h3 class="streamer-name">{{ stream.stream.channel.display_name }}</h3><h4 class="streamer-game-title" ng-if="(stream.stream.game).indexOf(streamInformation.streamerLongGameTitle[0]) !== -1">PUBG</h4><h4 class="streamer-game-title" ng-if="(stream.stream.game).indexOf(streamInformation.streamerLongGameTitle[0]) === -1">{{stream.stream.game}}</h4><p class="streamer-status" ng-if="stream.stream.channel.status.length <= 36">{{stream.stream.channel.status}}</p><p class="streamer-status" ng-if="stream.stream.channel.status.length > 36">Language: {{stream.stream.channel.language}}</p></div><span class="online-viewer-count">{{ stream.stream.viewers }} Viewers</span> </div></a></div>'
  };
})
