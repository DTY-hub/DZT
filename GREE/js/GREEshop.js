function fanhui() {
			location.href = basePath + "/admin/index.action";
		}

		function refresh() {
			window.location.reload();
		}
		a();

		function a() {
			// 百度地图API功能
			var aa = $('#jiansuo1').val();
			var diseSerach = $('#diseSerach').val();
			if(aa == '请输入关键字进行查询') {
				aa = '';
			}
			var map = new BMap.Map("l-map"); // 创建地图实例
			var point = new BMap.Point(116.403694, 39.927552); // 创建点坐标
			map.centerAndZoom(point, 5); // 初始化地图，设置中心点坐标和地图级别

			/* var polyline = new BMap.Polyline([
			                                  new BMap.Point(111.386601, 41.480484),
			                                  new BMap.Point(117.402517, 41.314242),
			                                  new BMap.Point(118.359177, 36.78359)
			                                ], {strokeColor:"blue", strokeWeight:6, strokeOpacity:0.5});
			                                map.addOverlay(polyline); */

			map.enableScrollWheelZoom();
			/* map.addControl(new BMap.NavigationControl());  //添加默认缩放平移控件 */
			map.addControl(new BMap.MapTypeControl({
				mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
			})); //2D图，卫星图

			map.addControl(new BMap.MapTypeControl({
				anchor: BMAP_ANCHOR_TOP_LEFT
			})); //左上角，默认地图控件
			/* map.setCurrentCity("北京");   //由于有3D图，需要设置城市哦 */
			var mapStyle = { //此段设置地图的底色样式
				features: [], //隐藏地图上的poi
				style: '' + diseSerach + '' //设置地图风格为高端黑
			}
			map.setMapStyle(mapStyle);
			/* var MAX = 10;
			var markers = [];
			var pt = null;
			var i = 0;
			for (; i < MAX; i++) {
			   pt = new BMap.Point(Math.random() * 40 + 85, Math.random() * 30 + 21);
			   markers.push(new BMap.Marker(pt));
			}
			 var markerClusterer = new BMapLib.MarkerClusterer(map, {markers:markers});  */
			var customLayer;

			function addCustomLayer(keyword) {
				if(customLayer) {
					map.removeTileLayer(customLayer);
				}
				customLayer = new BMap.CustomLayer({
					geotableId: 72216,
					q: '' + aa + '', //检索关键字
					tags: '', //空格分隔的多字符串
					filter: '' //过滤条件,参考http://developer.baidu.com/map/lbs-geosearch.htm#.search.nearby
				});
				map.addTileLayer(customLayer);
				customLayer.addEventListener('hotspotclick', callback);
			}
			addCustomLayer();

			function callback(e) //单击热点图层
			{
				var customPoi = e.customPoi; //poi的默认字段
				var contentPoi = e.content; //poi的自定义字段
				var content = '<p style="width:280px;margin:0;line-height:20px;">地址：' + contentPoi.customerName + '销售:' + customPoi.title + '<br/>产品:' + contentPoi.productName + '     演示日期:' + contentPoi.yanshiDate + '</p>';
				var searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
					title: customPoi.title, //标题
					width: 290, //宽度
					height: 40, //高度
					panel: "panel", //检索结果面板
					enableAutoPan: true, //自动平移
					enableSendToPhone: true, //是否显示发送到手机按钮
					/*    searchTypes :[
					       BMAPLIB_TAB_SEARCH,   //周边检索
					       BMAPLIB_TAB_TO_HERE,  //到这里去
					       BMAPLIB_TAB_FROM_HERE //从这里出发
					   ] */
				});
				var point = new BMap.Point(customPoi.point.lng, customPoi.point.lat);
				var marker = new BMap.Marker(point);
				searchInfoWindow.open(marker);
			}

			document.getElementById("open").onclick = function() {
				addCustomLayer();
			};

			document.getElementById("close").onclick = function() {
				if(customLayer) {
					map.removeTileLayer(customLayer);
				}
			};

			// 创建CityList对象，并放在citylist_container节点内
			var myCl = new BMapLib.CityList({
				container: "citylist_container",
				map: map
			});

			// 给城市点击时，添加相关操作
			myCl.addEventListener("cityclick", function(e) {
				// 修改当前城市显示
				document.getElementById("curCity").innerHTML = e.name;

				// 点击后隐藏城市列表
				document.getElementById("cityList").style.display = "none";
			});

			// 给“更换城市”链接添加点击操作
			document.getElementById("curCityText").onclick = function() {
				var cl = document.getElementById("cityList");
				if(cl.style.display == "none") {
					cl.style.display = "";
				} else {
					cl.style.display = "none";
				}
			};

			// 给城市列表上的关闭按钮添加点击操作
			document.getElementById("popup_close").onclick = function() {
				var cl = document.getElementById("cityList");
				if(cl.style.display == "none") {
					cl.style.display = "";
				} else {
					cl.style.display = "none";
				}
			};
		}

 
 
   