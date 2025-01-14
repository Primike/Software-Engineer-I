import Article from "./Article"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

function News({arts, home, us, world, science}) {
    return (
        <div className="newsdiv">
            <Tabs variant='soft-rounded' size = "lg" align="center" isFitted variant='enclosed'>
                <TabList className = "newstabs">
                    <Tab>Breaking News</Tab>
                    <Tab>World News</Tab>
                    <Tab>US News</Tab>
                    <Tab>Science</Tab>
                    <Tab>Arts</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                    {home.map((x, y) => (
                        <Article article = {x} key = {y} />
                    ))}
                    </TabPanel>
                    <TabPanel>
                    {world.map((x, y) => (
                        <Article article = {x} key = {y} />
                    ))}
                    </TabPanel>
                    <TabPanel>
                    {us.map((x, y) => (
                        <Article article = {x} key = {y} />
                    ))}
                    </TabPanel>
                    <TabPanel>
                    {science.map((x, y) => (
                        <Article article = {x} key = {y} />
                    ))}
                    </TabPanel>
                    <TabPanel>
                    {arts.map((x, y) => (
                        <Article article = {x} key = {y} />
                    ))}
                    </TabPanel>
                </TabPanels>
            </Tabs> 
        </div>
    )
}

export default News