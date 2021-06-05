function animate(obj, target, callback) {//(obj必须添加绝对定位)
				clearInterval(obj.timer); //防止多次运行
				obj.timer = setInterval(function() {
					var step = (target - obj.offsetLeft) / 10;

					step = step > 0 ? Math.ceil(step) : Math.floor(step)


					if (obj.offsetLeft == target) {
						clearInterval(obj.timer);
						
						if (callback)
						{
							callback();//调用回调函数
						}
					}
					obj.style.left = obj.offsetLeft + step + 'px';
				}, 15);
			}