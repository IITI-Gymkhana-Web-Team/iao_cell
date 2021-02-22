import React from "react"
import {
    Heading,
    HeadingLink,
    LinkList,
    DropdownSection,
    Icon
} from "./Components"


const ResearchDropdown = () => {
    return (
        <div style={{ width: '18.5rem' }}>
            <DropdownSection data-first-dropdown-section>
                <ul>
                    <HeadingLink>
                        <a href="/">
                            <Icon /> Link 1
                        </a>
                    </HeadingLink>
                    <HeadingLink>
                        <a href="/">
                            <Icon /> Link 2
                        </a>
                    </HeadingLink>

                </ul>
            </DropdownSection>
            <DropdownSection>
                <div>
                    <Heading>
                        <Icon />From the Blog
                    </Heading>
                    <LinkList marginLeft="25px">
                        <li>
                            <a href="/">Stripe Atlas &rsaquo;</a>
                        </li>
                        <li>
                            <a href="/">Stripe Home &rsaquo;</a>
                        </li>
                        <li>
                            <a href="/">Improved Fraud Detection &rsaquo;</a>
                        </li>
                    </LinkList>
                </div>
            </DropdownSection>
        </div>
    )
}

export default ResearchDropdown
