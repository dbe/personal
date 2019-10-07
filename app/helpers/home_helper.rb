module HomeHelper
  def nav_link(params, first_nav=nil, second_nav=nil, third_nav=nil)
    if not first_nav
      return ''
    elsif not second_nav
      text = first_nav.titleize
      path = "/#{first_nav}"
    elsif not third_nav
      text = second_nav.titleize
      path = "/#{first_nav}/#{second_nav}"
    else
      text = third_nav.titleize
      path = "/#{first_nav}/#{second_nav}/#{third_nav}"
    end

    is_selected = is_selected?(params, first_nav, second_nav, third_nav)
    is_hidden = is_hidden?(params, first_nav, second_nav, third_nav)
    is_unstyled = second_nav ? false : true

    css_class = "#{is_selected ? 'selected' : ''} #{is_hidden ? 'hidden' : ''} #{is_unstyled ? 'list-unstyled' : ''}"
    return content_tag(:li, link_to(text, path), :class => css_class)
  end

  def is_selected?(params, first_nav=nil, second_nav=nil, third_nav=nil)
    selected = true

    if first_nav and not params[:first_nav] == first_nav
      selected = false
    elsif second_nav and not params[:second_nav] == second_nav
      selected = false
    elsif third_nav and not params[:third_nav] == third_nav
      selected = false
    end

    return selected
  end

  def is_hidden?(params, first_nav=nil, second_nav=nil, third_nav=nil)
    hidden = true

    #First nav, always show
    if not second_nav
      hidden = false
    #Second nav, make sure first one matches
    elsif not third_nav
      if first_nav == params[:first_nav]
        hidden = false
      end
    #Third nav, make sure first 2 match
    else
      if first_nav == params[:first_nav] and second_nav == params[:second_nav]
        hidden = false
      end
    end

    return hidden
  end

end
