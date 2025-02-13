{strip}
{assign var = col value = ""}
{if !empty($data_extend['col'])}
    {assign var = col value = $data_extend['col']}
{/if}

{assign var = item value = "item"}
{if !empty($data_extend['item'])}
    {assign var = item value = $data_extend['item']}
{/if}

{assign var = ignore_lazy value = false}
{if !empty($data_extend.ignore_lazy)}
    {assign var = ignore_lazy value = $data_extend.ignore_lazy}
{/if}

<div class="bg_flash py-4"{if !empty($data_extend['locale'][{LANGUAGE}]['background'])} nh-lazy="image-background" data-src="{$this->Utilities->replaceVariableSystem($this->Block->getLocale('background', $data_extend))}"{/if}>
    <div class="container">
        <div class="section-fash-sale">
            {if !empty($data_extend['locale'][{LANGUAGE}]['image_flash_sale'])}
                <div class="title-section title_flash d-flex align-items-center flex-wrap bg-white rounded mb-4">
                    <h3 class="text-white mb-0">
                        {$this->LazyLoad->renderImage([
                            'src' => $this->Utilities->replaceVariableSystem($this->Block->getLocale('image_flash_sale', $data_extend)), 
                            'alt' => "flash sale", 
                            'class' => 'img-fluid'
                        ])}
                    </h3>
                    
                    {if !empty($data_extend.time)}
                        <div class="time d-flex align-items-end overflow-hidden ml-4">
                            <div class="time_title mb-1 mr-2">{__d('template', 'ket_thuc_trong')}</div>
                            <span id="time_sale_all_product" nh-time-end="{$data_extend.time}"></span>
                        </div>
                    {/if}
                    
                    <a class="link_proucts_sale"
                        href="{if !empty($data_extend['locale'][{LANGUAGE}]['link_proucts_sale'])}{$this->Block->getLocale('link_proucts_sale', $data_extend)}{else}/{/if}">
                        <span>{__d('template', 'xem_tat_ca')}</span>
                        <i class="fa-solid fa-chevron-right"></i>
                    </a>
                </div>
            {/if}
            
            {if !empty($data_block.data)}
                <div class="view-product content-fash-sale">
                    <div class="swiper" nh-swiper="{if !empty($data_extend.slider)}{htmlentities($data_extend.slider|@json_encode)}{/if}">
                        <div class="swiper-wrapper">
                            {foreach from = $data_block.data item = product}
                                {$this->element("../block/{$block_type}/item", [
                                    'product' => $product, 
                                    'is_slider' => true,
                                    'ignore_lazy' => $ignore_lazy
                                ])}
                            {/foreach}
                        </div>
                        {if !empty($data_extend.slider.pagination)}
                            <!-- If we need pagination -->
                            <div class="swiper-pagination"></div>
                        {/if}
                        {if !empty($data_extend.slider.navigation)}
                            <div class="swiper-button-next">
                                <i class="fa-light fa-angle-right h1"></i>
                            </div>
                            <div class="swiper-button-prev">
                                <i class="fa-light fa-angle-left h1"></i>
                            </div>
                        {/if}
                    </div>
                </div>
            {else}
                {__d('template', 'khong_co_du_lieu')}
            {/if}
        </div>

        {if !empty($block_config.has_pagination) && !empty($data_block[{PAGINATION}])}
            {$this->element('pagination', ['pagination' => $data_block[{PAGINATION}]])}
        {/if}
    </div>
</div>
{/strip}