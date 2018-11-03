# nvcli

![npm version](https://img.shields.io/npm/v/nvcli.svg)
![npm downloads](https://img.shields.io/npm/dt/nvcli.svg)

> node cli toolkit.

## Install

```
npm install -g nvcli
```

## Usage

显示本地IP 
```
nvcli -i
```

压缩文件 
```
nvcli -g input.txt,input.txt.gz
```

网址转二维码
```
nvcli -q http://bestvist.com
```

浏览器打开网址
```
nvcli -o http://bestvist.com
```

有道翻译
```
nvcli -t awesome
```

设置图片宽高
> --size width,height  图片的宽高 

```
nvcli resize input.jpg --size 50
或
nvcli resize input.jpg --size 50,50
```

图片加水印
> --position x,y 水印图片位置

```
nvcli watermark demo.png,watermark.png --position 50,50
```