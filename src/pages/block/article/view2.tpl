{assign var = is_slider value = false}
{if !empty($data_extend['slider'])}
    {assign var = is_slider value = true}
{/if}

{assign var = element value = "item"}
{if !empty($data_extend['element'])}
    {assign var = element value = {$data_extend['element']}}
{/if}

{assign var = col value = ""}
{if !empty($data_extend['col'])}
    {assign var = col value = $data_extend['col']}
{/if}

{assign var = ignore_lazy value = false}
{if !empty($data_extend.ignore_lazy)}
    {assign var = ignore_lazy value = $data_extend.ignore_lazy}
{/if}

{strip}
{if !empty($data_extend['locale'][{LANGUAGE}]['tieu_de'])}
	<h3 class="title-section text-center">
		{$this->Block->getLocale('tieu_de', $data_extend)}
		
		<div class="line-title">
    		{$this->LazyLoad->renderImage([
            	'src' => "{CDN_URL}/media/template/bottom-title.webp", 
            	'alt' => "image",
            	'class' => 'img-fluid object-contant'
            ])}
		</div>
	</h3>
{/if}

{if !empty($data_block.data)}
	<div class="row">
        <div class="col-xl-6 col-lg-6 col-md-6 col-12">
            <div class="row">
                {$this->element("../block/{$block_type}/item2", [
                    'article' => $data_block['data'][0],
                	'col' => 'col-xl-12 col-lg-12 col-md-12 col-12',
                	'is_slider' => false
                ])}
            </div>
        </div>
        
        <div class="col-xl-6 col-lg-6 col-md-6 col-12">
            {if count($data_block.data) > 1}
                <div class="row">
                    {foreach from = $data_block.data item = $article}
                        {if $article@index gte 1}
                			{$this->element("../block/{$block_type}/item2_small", [
                                'article' => $article,
                                'is_slider' => false,
                                'col' => "col-md-6 col-12"
                            ])}
                		{/if}
                    {/foreach}
                </div>
            {/if}
        </div>
    </div>
{else}
    {__d('template', 'khong_co_du_lieu')}
{/if}
{/strip}