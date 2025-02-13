{strip}
    {$tab_id = "tab-{time()}-{rand(1, 1000)}"}
    <div class="title-tab">
        {if !empty($data_extend['locale'][{LANGUAGE}]['tieu_de_tab'])}
            <h2 class="title-section title_trend fs-18 d-flex align-items-center mb-0">
                {if !empty($data_extend['locale'][{LANGUAGE}]['icon_tieu_de'])}
            		{$this->LazyLoad->renderImage([
                    	'src' => $this->Utilities->ReplaceVariableSystem($this->Block->getLocale('icon_tieu_de', $data_extend)), 
                    	'alt' => $this->Block->getLocale('tieu_de_tab', $data_extend),
                    	'class' => 'img-fluid icon_section object-contant mr-3'
                    ])}
                {/if}
                <div>
                    {$this->Block->getLocale('tieu_de_tab', $data_extend)}
                </div>
            </h2>
        {/if}
        {if !empty($data_block.tabs)}
            <ul class="block-tab nav effect-nav">
                {foreach from = $data_block.tabs item = tab}
                    <li class="nav-item">
                        <a nh-active-tab="{$tab@index}" class="nav-link{if $tab@first} active{/if}" data-toggle="tab" href="#{$tab_id}-{$tab@index}">
                            {if !empty($tab.name)}
                                {$tab.name}
                            {/if}
                        </a>
                    </li>
                {/foreach}
            </ul>
        {/if}
    </div>

    <div class="tab-content space-5">
        {foreach from = $data_block.tabs item = tab}
            <div nh-tab-content="{$tab@index}" {if $tab@first}loaded="1"{/if} id="{$tab_id}-{$tab@index}" class="tab-pane {if $tab@first}active{else}fade{/if}">
                {if !empty($data_block.data) && !empty($block_config.item[0].view_child) && $tab@first}
                    {assign var = view_path value = "../block/{PRODUCT}/{$block_config.item[0].view_child|pathinfo:$smarty.const.PATHINFO_FILENAME}"}
                    {$this->element($view_path, [
                        'data_block' => $data_block,
                        'block_type' => {PRODUCT}
                    ])}
                {/if}
            </div>
        {/foreach}
        
        {if !empty($data_extend['locale'][{LANGUAGE}]['url_xem_them'])}
            <div class="text-center pt-lg-4">
                <a class="read_more" href="{$this->Block->getLocale('url_xem_them', $data_extend)}">
                    {__d('template', 'xem_them')} 
                </a>
            </div>
        {/if}
    </div>
{/strip}