
		window.chromane_table_render = function () {

			with(this){return _c('div',{staticClass:"chromane_table"},[_c('div',{staticClass:"chromane_table-main_row"},_l((model.main_row_cell_arr),function(item){return _c('div',{staticClass:"chromane_table-main_row-cell",style:({width : model.table_row_width + '%'}),domProps:{"textContent":_s(item.title)}})}),0),_v(" "),_l((model.row_arr),function(row){return _c('div',{staticClass:"chromane_table-row"},_l((row),function(cell){return _c('div',{staticClass:"chromane_table-row-cell",style:({width : model.table_row_width + '%'})},[(cell.type ==='text')?_c('div',{domProps:{"textContent":_s(cell.value)}}):_e(),_v(" "),(cell.type ==='image')?_c('div',[(cell.no_image === true)?_c('span',{domProps:{"textContent":_s(cell.name)}}):_e(),_v(" "),(cell.filter === true && cell.no_image === false)?_c('img',{staticClass:"filtred-image",attrs:{"src":cell.value}}):_e(),_v(" "),(cell.filter === false)?_c('img',{attrs:{"src":cell.value}}):_e()]):_e(),_v(" "),(cell.type ==='icons')?_c('div',_l((cell.value),function(icon){return _c('div',[(icon === 'launch_partner' )?_c('i',[_v("🚀")]):_e(),_v(" "),(icon==='popular')?_c('i',[_v("🔥")]):_e(),_v(" "),(icon==='new')?_c('i',[_v("⚡️")]):_e(),_v(" "),(icon === 'used_by_producthunt')?_c('svg',{attrs:{"width":"20","height":"20","viewBox":"0 0 40 40","xmlns":"http://www.w3.org/2000/svg"}},[_c('g',{attrs:{"fill":"none","fill-rule":"evenodd"}},[_c('path',{attrs:{"d":"M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20 8.954 20 20","fill":"#DA552F"}}),_v(" "),_c('path',{attrs:{"d":"M22.667 20H17v-6h5.667a3 3 0 010 6m0-10H13v20h4v-6h5.667a7 7 0 100-14","fill":"#FFF"}})])]):_e()])}),0):_e()])}),0)})],2)}

		};
	
		window.chromane_table_static_render_fns = function () {

			return [

				

			];

		};
	