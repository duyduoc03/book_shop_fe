{strip}
{if !empty($categories)}
	{foreach from = $categories item = category}
		<li>
			<a class="line-clamp-1" href="{$this->Utilities->checkInternalUrl($category.url)}">
				{$category.name|escape}
			</a>
		</li>
		{if !empty($category.children)}
			{$this->element('../block/category_product/item_sub_category', [
            	'categories' => $category.children
            ])}
		{/if}
	{/foreach}
{/if}
{/strip}