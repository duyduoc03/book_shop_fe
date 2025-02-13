{strip}
{$menu_id = "menu-{time()}-{rand(1, 1000)}"}
{$menu_id_2 = "menu-mobile-{time()}-{rand(1, 1000)}"}

<div class="menu_main d-none d-lg-block">
	<span class="vertical-tool">
	    <i class="fa-light fa-grid-2"></i>
	</span>
    
	{if !empty($data_block.data)}
        <div class="menu_main_container container">
            <div class="menu_main_content">
                <div class="row">
                    <div class="menu_main_left col-3">
                    	<h4 class="menu_cate_title">
                    	    {__d('template', 'danh_muc_san_pham')}
                    	</h4>
                    	
                    	<ul class="nav d-block" id="tabs-nav">
                            {foreach from = $data_block.data item = tab}
                                <li class="nav-item">
                                    <a class="tab_title{if $tab@first} active{/if}" href="#{$menu_id}-{$tab@index}">
                                        {$tab.name}
                                    </a>
                                </li>
                            {/foreach}
                        </ul>
                    </div>
                    <div class="menu_main_right col-9" id="tabs-content">
                        {foreach from = $data_block.data item = tab}
                            <div id="{$menu_id}-{$tab@index}" class="menu_tab-content">
                                <div class="d-flex align-items-center mb-5">
                                    {if !empty($tab.image_avatar)}
                                        {$this->LazyLoad->renderImage([
                                            'src' => "{CDN_URL}{$this->Utilities->getThumbs($tab.image_avatar, 150)}", 
                                            'alt' => $tab.name, 
                                            'class' => 'img-fluid category_icon mr-3',
                                            'ignore' => true
                                        ])}
                                    {/if}
                                    <h4 class="menu_cate_title">
                                        {$tab.name}
                                    </h4>
                                </div>
                                
                                {if !empty($tab.children)}
                                    {$this->element('../block/category_product/item_category', [
                                    	'categories' => $tab.children
                                    ])}
                                {else}
                                    {__d('template', 'khong_co_du_lieu')}
                                {/if}
                            </div>
                        {/foreach}
                    </div>
                </div>
            </div>
        </div>
    {/if}
</div>

<div class="menu_main menu-container d-block d-lg-none">
	<span class="vertical-tool" nh-menu="btn-open" menu-type="cate">
	    <i class="fa-light fa-grid-2"></i>
	</span>
    
    <nav class="menu-section" nh-menu="sidebar" menu-type="cate">
		<div class="menu-top">
			<span class="menu-header">{__d('template', 'danh_muc_san_pham')}</span>
			<a href="javascript:;" nh-menu="btn-close" class="close-sidebar effect-rotate icon-close">
				<i class="fa-solid fa-arrow-left"></i>
			</a>
		</div>
		
		{if !empty($data_block.data)}
            <div class="d-flex">
                <div class="menu_main_left title-tab">
                	<ul class="nav block-tab">
                        {foreach from = $data_block.data item = tab}
                            <li class="nav-item w-100">
                                <a class="nav-link d-block text-center{if $tab@first} active{/if}" data-toggle="tab" href="#{$menu_id_2}-{$tab@index}">
                                    {if !empty($tab.image_avatar)}
                                        {$this->LazyLoad->renderImage([
                                            'src' => "{CDN_URL}{$this->Utilities->getThumbs($tab.image_avatar, 150)}", 
                                            'alt' => $tab.name, 
                                            'class' => 'img-fluid category_icon',
                                            'ignore' => true
                                        ])}
                                    {/if}
                                    <h5 class="menu_cate_title">{$tab.name}</h5>
                                </a>
                            </li>
                        {/foreach}
                    </ul>
                </div>
                <div class="menu_main_right tab-content">
                    {foreach from = $data_block.data item = tab}
                        <div {if $tab@first}loaded="1"{/if} id="{$menu_id_2}-{$tab@index}" class="tab-pane {if $tab@first}active{else}fade{/if}">
                            {if !empty($tab.children)}
                                {$this->element('../block/category_product/item_menu_mobile', [
                                	'categories' => $tab.children,
                                	'parent_id' => null
                                ])}
                            {else}
                                {__d('template', 'khong_co_du_lieu')}
                            {/if}
                        </div>
                    {/foreach}
                </div>
            </div>
        {/if}
	</nav>
</div>
{/strip}