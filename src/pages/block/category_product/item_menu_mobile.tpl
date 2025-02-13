{strip}
{if !empty($categories)}
	{if !empty($parent_id)}
		<span nh-toggle="child-category-{$parent_id}" class="dropdown-toggle"></span>
	{/if}

	<ul {if !empty($parent_id)}nh-toggle-element="child-category-{$parent_id}"{/if} class="{if !empty($parent_id)}list-child{else}categories-section{/if} category_menu_mobile list-unstyled mb-0">
	    
	    <li class="first_link">
			<a {if !empty($data_extend['locale'][{LANGUAGE}]['url_all_product'])}href="{$this->Block->getLocale('url_all_product', $data_extend)}"{/if}>
				{__d('template', 'tat_ca_san_pham')}
			</a>
		</li>

		
		{foreach from = $categories item = category}
			<li class="{if !empty($category.children)}has-child{/if}">
				<a class="line-clamp-1" href="{if !empty($category.children)}javascrip:;{else}{if !empty($category.url)}{$this->Utilities->checkInternalUrl($category.url)}{/if}{/if}" {if !empty($category.children)}nh-toggle="child-category-{$category.id}"{/if}>
					{$category.name|escape}
				</a>
				{if !empty($category.children)}
					{$this->element('../block/category_product/item_menu_mobile', [
						'categories' => $category.children,
						'parent_id' => $category.id,
						'link_all_2' => $category.url
					])}
				{/if}
			</li>
		{/foreach}
		
		{if !empty($link_all_2)}
    	    <li class="last_link">
    			<a href="{$this->Utilities->checkInternalUrl($link_all_2)}">
    				{__d('template', 'tat_ca_san_pham')}
    			</a>
    		</li>
		{/if}
	</ul>
{/if}
{/strip}