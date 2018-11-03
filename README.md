# nvcli

![npm version](https://img.shields.io/npm/v/nvcli.svg)
![npm downloads](https://img.shields.io/npm/dt/nvcli.svg)

> node cli toolkit.

## 全局安装 Install

```
npm install -g nvcli
```

## 使用 Usage

** 显示本地IP **
```
nvcli --ip
```

**查询IP位置**
```
nvcli --ipp 223.202.204.194
```

**压缩文件** 
```
nvcli --gzip input.txt,input.txt.gz
```

**网址转二维码**
```
nvcli --qrcode http://bestvist.com
```

**打开文件或网址**
```
nvcli --open http://bestvist.com
或
nvcli --open demo.txt
```

**百度搜索**
```
nvcli --search bestvist
```

**有道翻译**
```
nvcli --translate awesome
```

**改变图片宽高**
> --size width,height  图片的宽高 

```
nvcli resize input.jpg --size 50
或
nvcli resize input.jpg --size 50,50
```

**图片加水印**
> --position x,y 水印图片位置

```
nvcli watermark demo.png,watermark.png --position 50,50
```