import React,{Fragment} from 'react'
import { Button } from '..'
import { CheckIcon, MinusIcon } from '@heroicons/react/20/solid'

const CompareServices:React.FC = () => {
  return (
    <section className = "relative pt-32 pb-24 text-white bg-slate-900">
      <div className = "px-4 mx-auto max-w-7xl ">
        <Example/>
      </div>
      <svg className = "absolute top-0"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,128L1440,64L1440,0L0,0Z"></path></svg>
    </section>
  )
}

export default CompareServices


const tiers = [
  { 
    name: 'Basic', 
    href: '#', 
    description: 'Business love this package the most.' 
  },
  {
    name: 'Deep',
    href: '#',
    priceMonthly: 29,
    description: 'Business use this if they need a deep cleaning of their building',
  },
  {
    name: 'Custom',
    href: '#',
    priceMonthly: 59,
    description: "Our packages don't meet your needs? Choose what you need.",
  },
]
const sections = [
  {
    name: 'Bathroom',
    features: [
      { 
        name: 'Clean tub & Shower', 
        tiers: { 
          Basic: false, 
          Deep: false, 
          Custom: true 
        } 
      },
      { 
        name: "Santizing entire toilet & urinal interior and exterior",
        tiers: { 
          Basic: true, 
          Deep: false, 
          Custom: true 
        } 
      },
      { 
        name: "Sanitizing Sinks",
        tiers: { 
          Basic: true, 
          Deep: true, 
          Custom: true 
        } 
      },
      { 
        name: "Mirror Cleaning",
        tiers: { 
          Basic: true, 
          Deep: false, 
          Custom: true 
        } 
      },
      { 
        name: "Door knob sanitizing",
        tiers: { 
          Basic: true, 
          Deep: true, 
          Custom: true 
        } 
      },
      { 
        name: "Toilet & Urinal Deep Clean",
        tiers: { 
          Basic: false, 
          Deep: true, 
          Custom: true 
        } 
      },
      { 
        name: "Tub deep clean",
        tiers: { 
          Basic: false, 
          Deep: true, 
          Custom: true 
        } 
      },
      { 
        name: "Change Towels",
        tiers: { 
          Basic: false, 
          Deep: false, 
          Custom: true 
        } 
      },
      { 
        name: "Disinfect faucets and shower heads",
        tiers: { 
          Basic: false, 
          Deep: true, 
          Custom: true 
        } 
      },
      { 
        name: "Disinfect floors",
        tiers: { 
          Basic: false, 
          Deep: true, 
          Custom: true 
        } 
      },
      { 
        name: "Waste Removal",
        tiers: { 
          Basic: true, 
          Deep: true, 
          Custom: true 
        } 
      },
    ],
  },
  {
    name: 'Kitchen',
    features: [
      { 
        name: 'Wipe down exterior of all appliances.', 
        tiers: { 
          Basic: true, 
          Deep: false, 
          Custom: true 
        } 
      },
      { 
        name: "Clean microwave interior and exterior",
        tiers: { 
          Basic: true, 
          Deep: false, 
          Custom: true 
        } 
      },
      { 
        name:"Stove top burners and drip pans",
        tiers: { 
          Basic: true, 
          Deep: false, 
          Custom: true 
        } 
      },
      { 
        name: "Clean backsplash",
        tiers: { 
          Basic: false, 
          Deep: true, 
          Custom: true 
        } 
      },
      { 
        name: "Sanitize Counters",
        tiers: { 
          Basic: true, 
          Deep: true, 
          Custom: true 
        } 
      },
      { 
        name: "Sanitize sinks and faucets",
        tiers: { 
          Basic: true, 
          Deep: true, 
          Custom: true 
        } 
      },
      { 
        name: "Wipe down cabinet doors interior and exterior",
        tiers: { 
          Basic: false, 
          Deep: true, 
          Custom: true 
        } 
      },
      { 
        name: "Wipe down hinges and sanitize knobs",
        tiers: { 
          Basic: true, 
          Deep: true, 
          Custom: true 
        } 
      },
      { 
        name: "Polish cabinets as needed",
        tiers: { 
          Basic: false, 
          Deep: false, 
          Custom: true 
        } 
      },
      { 
        name: "Change towels upon request",
        tiers: { 
          Basic: false, 
          Deep: false, 
          Custom: true 
        } 
      },
      { 
        name: "Waste Removal",
        tiers: { 
          Basic: true, 
          Deep: true, 
          Custom: true 
        } 
      },
    ],
  },
]


const Example:React.FC = () => {
  return (
    <div>
      <div className="py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
        {/* xs to lg */}
        <div className="max-w-2xl mx-auto space-y-16 lg:hidden">
          {tiers.map((tier, tierIdx) => (
            <section key={tier.name}>
              <div className="px-4 mb-8">
                <h2 className="text-3xl font-medium leading-6 text-white">{tier.name}</h2>
                <p className="max-w-xs mt-4 text-sm sm:text-base lg:text-lg text-white/70">{tier.description}</p>
                <div className = "mt-4">
                  <Button
                  theme = 'secondary'
                  fullWidth={true}
                  >
                    <p className = "text-sm sm:text-base">Get a quote for {tier.name}</p>
                  </Button>
                </div>
              </div>

              {sections.map((section) => (
                <table key={section.name} className="w-full">
                  <caption className="px-4 py-3 text-sm font-medium text-left text-white border-t border-slate-700/50 bg-slate-800 ">
                    {section.name}
                  </caption>
                  <thead>
                    <tr>
                      <th className="sr-only" scope="col">
                        Feature
                      </th>
                      <th className="sr-only" scope="col">
                        Included
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700/50">
                    {section.features.map((feature:any) => (
                      <tr key={feature.name} className="border-t border-slate-700/50">
                        <th className="px-4 py-5 text-sm font-normal text-left text-white/70" scope="row">
                          {feature.name}
                        </th>
                        <td className="py-5 pr-4">
                          {typeof feature.tiers[tier.name] === 'string' ? (
                            <span className="block text-sm text-right text-white/70">{feature.tiers[tier.name]}</span>
                          ) : (
                            <>
                              {feature.tiers[tier.name] === true ? (
                                <CheckIcon className="w-5 h-5 ml-auto text-indigo-500" aria-hidden="true" />
                              ) : (
                                <MinusIcon className="w-5 h-5 ml-auto text-gray-400" aria-hidden="true" />
                              )}

                              <span className="sr-only">{feature.tiers[tier.name] === true ? 'Yes' : 'No'}</span>
                            </>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ))}

                <div className = "mt-4">
                  <Button
                  theme = 'secondary'
                  fullWidth={true}
                  >
                    <p className = "text-sm sm:text-base">Get a quote for {tier.name}</p>
                  </Button>
                </div>
            </section>
          ))}
        </div>

        {/* lg+ */}
        <div className="hidden lg:block">
          <table className="w-full h-px table-fixed">
            <caption className="sr-only">Pricing plan comparison</caption>
            <thead>
              <tr>
                <th className="text-sm font-medium text-left text-white " scope="col">
                  <span className="sr-only">Feature by</span>
                  <span>Plans</span>
                </th>
                {tiers.map((tier) => (
                  <th
                    key={tier.name}
                    className="w-1/4 px-4 text-lg font-medium leading-6 text-left text-white "
                    scope="col"
                  >
                    {tier.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="border-gray-200 divide-y divide-slate-700/50 ">
              <tr className=''>
                <th className="py-6 text-sm font-medium text-left text-white align-top " scope="row">
                  Service
                </th>
                {tiers.map((tier) => (
                  <td key={tier.name} className="h-full pb-6 align-top">
                    <div className="relative table h-full mx-4 ">
                      <p className="mt-4 mb-16 text-sm text-white/70">{tier.description}</p>
                      <div className = "absolute bottom-0 left-0 right-0 mt-4">
                        <Button
                        theme = 'secondary'
                        fullWidth={true}
                        >
                          <p className = "text-sm sm:text-base">Get a quote</p>
                        </Button>
                      </div>
                    </div>
                  </td>
                ))}
              </tr>
              {sections.map((section) => (
                <Fragment key={section.name}>
                  <tr>
                    <th
                      className="py-3 pl-6 text-sm font-medium text-left text-white bg-slate-800"
                      colSpan={4}
                      scope="colgroup"
                    >
                      {section.name}
                    </th>
                  </tr>
                  {section.features.map((feature:any) => (
                    <tr key={feature.name}>
                      <th className="px-6 py-5 text-sm font-normal text-left text-white/70" scope="row">
                        {feature.name}
                      </th>
                      {tiers.map((tier:any) => (
                        <td key={tier.name} className="px-6 py-5">
                          {typeof feature.tiers[tier.name] === 'string' ? (
                            <span className="block text-sm text-white/70">{feature.tiers[tier.name]}</span>
                          ) : (
                            <>
                              {feature.tiers[tier.name] === true ? (
                                <CheckIcon className="w-5 h-5 text-indigo-600" aria-hidden="true" />
                              ) : (
                                <MinusIcon className="w-5 h-5 text-white/70" aria-hidden="true" />
                              )}

                              <span className="sr-only">
                                {feature.tiers[tier.name] === true ? 'Included' : 'Not included'} in {tier.name}
                              </span>
                            </>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t border-slate-700/50">
                <th className="sr-only" scope="row">
                  Choose your plan
                </th>
                {tiers.map((tier) => (
                  <td key={tier.name} className = "px-4 pt-7">
                    <Button
                    theme = 'secondary'
                    fullWidth={true}
                    >
                      <p>Get a quote</p>
                    </Button>
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  )
}
