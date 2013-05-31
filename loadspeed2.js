var cronJob = require('cron').CronJob;
 
// 毎秒実行
var cronTime = "*/2 * * * *";
 
// 一度だけ実行したい場合、Dateオブジェクトで指定も可能
// var cronTime = new Date();

var page = require('webpage').create();
 
var job = new cronJob({
  //実行したい日時 or crontab書式
  cronTime: cronTime
 
  //指定時に実行したい関数
  , onTick: function() { 


	page.open('http://8.sync-play.appspot.com/user1-aghbc/3.3-kvsupdnew7.htm', function(){
	// do something..
	page.evaluate(function(){
		// do something...
	});
	phantom.exit();
	});

	
	console.log('onTick!');
	
	
  }
 
  //ジョブの完了または停止時に実行する関数 
  , onComplete: function() {
    console.log('onComplete!')
  }
 
  // コンストラクタを終する前にジョブを開始するかどうか
  , start: false
})
 
//ジョブ開始
job.start();
//ジョブ停止
//job.stop();