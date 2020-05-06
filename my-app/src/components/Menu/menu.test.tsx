import React from 'react';
import {render,RenderResult,fireEvent,cleanup} from '@testing-library/react';
import Menu,{MenuProps} from './menu';
import MenuItem from './menuItem';
const testProps:MenuProps={
  defaultIndex:0,
  onSelect:jest.fn(),
  className:"test"
}
const testVerProps:MenuProps={
  defaultIndex:0,
  mode:'vertical'
}
const NiceMenu=(props:MenuProps)=>{
  return(
         <Menu {...props}>
        
            <MenuItem index={0} >active朱辛庄社区☎️：60702429</MenuItem>
            <MenuItem index={1} disabled>disabled史各庄社区☎️：80716579</MenuItem>
            <MenuItem index={2}>史各庄社区☎️：69732821 xyz</MenuItem>
        </Menu>
  )
}
let wrapper:RenderResult,menuElement:HTMLElement,activeElement:HTMLElement,disabledElement:HTMLElement
describe('test menu 和 menuitem 组件',()=>{
  beforeEach(()=>{
    //想要测试的组件
    wrapper=render(NiceMenu(testProps))
    //包裹一下
    menuElement=wrapper.getByTestId('menu');
    // 默认索引第一个是is-active样式
    activeElement=wrapper.getByText("active朱辛庄社区☎️：60702429");
    // 获取后面设置disabled样式
    disabledElement=wrapper.getByText('disabled史各庄社区☎️：80716579');
  })
  it("默认时候的情况",()=>{
      //判断是否存在
      expect(menuElement).toBeInTheDocument()
      //有样式
      expect(menuElement).toHaveClass('viking-menu test');
      //li 的长度 等于3
      expect(menuElement.getElementsByTagName('li').length).toEqual(3);
      // 第一个的样式
      expect(activeElement).toHaveClass('menu-item is-active');
      // disabledElement的样式
      expect(disabledElement).toHaveClass('menu-item is-disabled');
  })
  it("点击 menuitem 时候的情况",()=>{
    //获取 节点
    const thirdItem=wrapper.getByText('史各庄社区☎️：69732821 xyz');
    //模拟点击 节点 事件
    fireEvent.click(thirdItem);
    // 点击之后的样式
    expect(thirdItem).toHaveClass('is-active');
    // 原来的样式失效
    expect(activeElement).not.toHaveClass('is-active')
    // 被点击的 索引值
    expect(testProps.onSelect).toHaveBeenCalledWith(2);
    //点击disabled  时候的动态
    fireEvent.click(disabledElement);
    // 无样式
    expect(disabledElement).not.toHaveClass('is-active');
    // 没有选择
    expect(testProps.onSelect).not.toHaveBeenCalledWith(1);
  })
  it("点击 横向 时候的动态",()=>{
    cleanup()
    const wrapper=render(NiceMenu(testVerProps));
    const menuElement=wrapper.getByTestId("menu")
    expect(menuElement).toHaveClass('menu-vertical')
  })
  
  //每个 case 末尾都调用cleanup方法
})