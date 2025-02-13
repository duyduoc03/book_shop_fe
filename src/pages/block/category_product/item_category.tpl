{strip}
{if !empty($categories)}
	<div class="menu_category row">
		{foreach from = $categories item = category}
			<div class="col-3 mb-4">
			    <h5 class="sub_cate_title">
			        <a class="line-clamp-1" href="{$this->Utilities->checkInternalUrl($category.url)}">
    					{$category.name|escape}
    				</a>
			    </h5>
				
				{if !empty($category.children)}
				    <ul class="menu_sub_category list-unstyled mb-0">
    					{$this->element('../block/category_product/item_sub_category', [
                        	'categories' => $category.children
                        ])}
					</ul>
					
					<a class="fs-13" href="{$this->Utilities->checkInternalUrl($category.url)}">
                        {__d('template', 'xem_tat_ca')}
                    </a>
				{/if}
			</div>
		{/foreach}
	</div>
{/if}
{/strip}