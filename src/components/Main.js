require('normalize.css/normalize.css');
require('styles/App.scss');

var imageDatas = require('../stores/imageDatas.json')
// 把图片的文件名转换为真实有效的图片地址
// 写的文艺一点，只执行一次的可以使用自执行函数

imageDatas = (function genImageURL(imageDatasArr) {
	for(var i = 0, j = imageDatasArr.length; i < j; i++){
		var singleImageData = imageDatasArr[i];
		singleImageData.imageURL = require('../images/' + singleImageData.fileName);
		imageDatasArr[i] = singleImageData;
	}
	return imageDatasArr;
})(imageDatas);

// imageDatas = genImageURL(imageDatas);


import React from 'react';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
     	<section className="stage">
     		<section className="img-sec">
     			hello
     		</section>
     		<nav className="controller-nav">
     			world
     		</nav>
     	</section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
