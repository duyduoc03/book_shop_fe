{strip}
{assign var = col value = ""}
{if !empty($data_extend['col'])}
    {assign var = col value = $data_extend['col']}
{/if}

{assign var = item value = "item"}
{if !empty($data_extend['item'])}
    {assign var = item value = $data_extend['item']}
{/if}

{assign var = is_slider value = false}
{if !empty($data_extend.slider)}
    {assign var = is_slider value = true}
{/if}

{assign var = ignore_lazy value = false}
{if !empty($data_extend.ignore_lazy)}
    {assign var = ignore_lazy value = $data_extend.ignore_lazy}
{/if}

{if !empty($data_block.data)}
    <div class="bg-white rounded p-4">
        <div class="d-flex flex-wrap align-items-center p-3 mb-4">
            <div nh-filter-params class="d-block d-lg-none pr-4 mr-auto">
                <a class="btn-filter-mobile text-uppercase font-weight-500" nh-filter="btn" href="javascript:;">
                    <i class="fa fa-bars-filter"></i> {__d('template', 'bo_loc')}
                </a>
            </div>
            <div class="d-flex flex-wrap align-items-center">
            	<div class="mr-3">
            	    {__d('template', 'sap_xep_theo')}:
        	    </div> 
            	<div class="orderby-section mr-4">
                    <div class="dropdown">
                        <span class="orderby-title" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {__d('template', 'sap_xep')}
                        </span>
                        <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="javascript:;" nh-link-redirect="{$this->Utilities->addParamsToUrl($this->Url->build(), ['sort' => 'name-asc'])}">{__d('template', 'sap_xep_theo_ten')}</a>
                            <a class="dropdown-item" href="javascript:;" nh-link-redirect="{$this->Utilities->addParamsToUrl($this->Url->build(), ['sort' => 'price-asc'])}">{__d('template', 'gia_tu_thap_den_cao')}</a>
                            <a class="dropdown-item" href="javascript:;" nh-link-redirect="{$this->Utilities->addParamsToUrl($this->Url->build(), ['sort' => 'price'])}">{__d('template', 'gia_tu_cao_den_thap')}</a>
                        </div>
                    </div>
                </div>
                <div class="per-page-section limit_form">
                    {assign var = limit value = $this->Utilities->getParamsByKey('limit')}
                    <select id="link_limit">
            	        <option value="{$this->Utilities->addParamsToUrl($this->Url->build(), ['limit' => 12])}" {if $limit == 12}selected{/if}>12</option>
        		        <option value="{$this->Utilities->addParamsToUrl($this->Url->build(), ['limit' => 24])}" {if $limit == 24}selected{/if}>24</option>
        		        <option value="{$this->Utilities->addParamsToUrl($this->Url->build(), ['limit' => 36])}" {if $limit == 36}selected{/if}>36</option>
                	</select>
                	<span class="limit_name">
                	    <span>{__d('template', 'san_pham')}</span> <i class="fa-solid fa-chevron-down pl-3"></i>
            	    </span> 
                </div>
            </div>
        </div>
        
        <div class="row">
            {foreach from = $data_block.data item = product}
                {$this->element("../block/{$block_type}/{$item}", [
                    'product' => $product, 
                    'col' => $col,
                    'is_slider' => $is_slider,
                    'ignore_lazy' => $ignore_lazy
                ])}
            {/foreach} 
        </div>
            
        {if !empty($block_config.has_pagination) && !empty($data_block[{PAGINATION}])}
            {$this->element('pagination_ajax', ['pagination' => $data_block[{PAGINATION}]])}
        {/if}
    </div>
{else}
    <div class="mb-4">
        {__d('template', 'khong_co_du_lieu')}
    </div>
{/if}
{/strip}